import { useEffect, useMemo, useRef } from "react"

export default function SyncedVideosRow({
  sources = [],
  titles = [],
  n = sources.length,
  gap = 0,
  width, // optional: number (px)
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
    withOthers(leader, (v) => v.play().catch(() => {}))
  }

  const syncPause = (leader) => withOthers(leader, (v) => v.pause())

  const startAll = () => {
    const leader = refs.current[0]
    if (!leader) return
    syncTime(leader)
    leader.play().catch(() => {})
    withOthers(leader, (v) => v.play().catch(() => {}))
  }

  useEffect(() => {
    startAll()
    const t = setTimeout(startAll, 200)
    return () => clearTimeout(t)
  }, [items.length])

  return (
    <div className="flex justify-center">
      <div
        className="grid w-full"
        style={{
          gridTemplateColumns: `repeat(${items.length}, minmax(0, 1fr))`,
          gap,
          ...(width ? { width } : {}),
        }}
      >
        {items.map((src, i) => (
          <div key={`${src}-${i}`} className="flex flex-col">
            <video
              ref={(el) => (refs.current[i] = el)}
              muted
              loop
              playsInline
              autoPlay
              preload="auto"
              className="block w-full aspect-[4/3] h-auto"
              onPlay={(e) => syncPlay(e.currentTarget)}
              onPause={(e) => syncPause(e.currentTarget)}
              onSeeked={(e) => syncTime(e.currentTarget)}
            >
              <source src={src} type="video/mp4" />
            </video>

            {titles[i] && (
              <div className="mt-2 text-sm font-bold text-center">
                {titles[i]}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}