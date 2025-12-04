const SectionDivider = () => {
  return (
    <div className="relative h-24 md:h-32 bg-muted/50 overflow-hidden">
      <svg
        className="absolute bottom-0 w-full h-full"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,0 C300,100 900,20 1200,80 L1200,120 L0,120 Z"
          className="fill-muted/50"
        />
        <path
          d="M0,40 C400,120 800,40 1200,100 L1200,120 L0,120 Z"
          className="fill-background"
        />
      </svg>
    </div>
  );
};

export default SectionDivider;