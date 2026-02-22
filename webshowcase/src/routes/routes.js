export const ROUTES = {
  home: { path: "/", label: "Home" },

  // Single Object Tracking → Heuristical Approaches
  backgroundSubtraction: { path: "/single-object-tracking/heuristical/background-subtraction", label: "Background Subtraction" },
  frameDifferencing: { path: "/single-object-tracking/heuristical/frame-differencing", label: "Frame Differencing" },

  // Single Object Tracking → Statistical Approaches
  singleGaussian: { path: "/single-object-tracking/statistical/single-gaussian", label: "Single Gaussian" },
  mixtureOfGaussians: { path: "/single-object-tracking/statistical/mixture-of-gaussians", label: "Mixture of Gaussians" },
  kernelDensity: { path: "/single-object-tracking/statistical/kernel-density", label: "Kernel Density" },

  // Fallback
  notFound: { path: "*", label: "Not Found" },
}