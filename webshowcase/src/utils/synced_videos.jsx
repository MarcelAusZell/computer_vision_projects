import { useEffect, useMemo, useRef } from "react"

export default function SyncedVideosRow({
  sources = [],
  n = sources.length,
  gap = 16,
}) {
  const refs = useRef([])
  const items = useMemo(() => sources.slice(0, n), [sources, n])

  const withOthers = (leader, fn) => {
    for (const v of refs.current) {
      if (v && v !== leader) fn(v)
    }
  }

  const syncTime = (leader) => {
    const t = leader.currentTime
    withOthers(leader, (v) => {
      if (Math.abs(v.currentTime - t) > 0.03) v.currentTime = t
    })
  }

  const syncPlay = (leader) => {
    syncTime(leader)
    withOthers(leader, (v) => v.play().catch(() => { }))
  }

  const syncPause = (leader) => withOthers(leader, (v) => v.pause())

  const startAll = () => {
    const leader = refs.current[0]
    if (!leader) return
    syncTime(leader)
    leader.play().catch(() => { })
    withOthers(leader, (v) => v.play().catch(() => { }))
  }

  // Start once videos are mounted (autoplay-safe because muted)
  useEffect(() => {
    startAll()
    // if the browser delays loading, try again shortly after
    const t = setTimeout(startAll, 200)
    return () => clearTimeout(t)
  }, [items.length])

return (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: `repeat(${items.length}, minmax(0, 1fr))`,
      gap,
      width: "100%",
    }}
  >
    {items.map((src, i) => (
      <video
        key={`${src}-${i}`}
        ref={(el) => (refs.current[i] = el)}
        muted
        loop
        playsInline
        autoPlay
        preload="auto"
        style={{
          width: "100%",
          aspectRatio: "4 / 3",
          height: "auto",
          display: "block",
        }}
        onPlay={(e) => syncPlay(e.currentTarget)}
        onPause={(e) => syncPause(e.currentTarget)}
        onSeeked={(e) => syncTime(e.currentTarget)}
      >
        <source src={src} type="video/mp4" />
      </video>
    ))}
  </div>
)}