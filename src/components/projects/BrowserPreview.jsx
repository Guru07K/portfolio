import { LockIcon } from "./ProjectIcons";

const BAR_HEIGHT = 38;
const IMAGE_RATIO = 16 / 10;

/*
 * A screenshot presented inside a minimal browser window. The window keeps the
 * screenshot's 16:10 ratio and scales to the largest size that fits the space
 * available (container query units), so nothing is cropped or stretched.
 */
function BrowserPreview({ screenshot }) {
  return (
    <div className="h-full w-full flex items-center justify-center [container-type:size]">
      <figure
        className="m-0 flex flex-col rounded-[14px] border border-line bg-card overflow-hidden shadow-[0_24px_60px_-28px_rgba(20,18,26,0.35),0_2px_6px_rgba(20,18,26,0.05)] dark:shadow-[0_24px_60px_-24px_rgba(0,0,0,0.8),0_2px_6px_rgba(0,0,0,0.3)]"
        style={{ width: `min(100cqw, (100cqh - ${BAR_HEIGHT + 2}px) * ${IMAGE_RATIO})` }}
      >
        <div
          className="shrink-0 grid grid-cols-[auto_1fr_auto] items-center gap-3 px-4 border-b border-line bg-page"
          style={{ height: BAR_HEIGHT }}
        >
          <div className="flex items-center gap-[7px]" aria-hidden="true">
            <span className="w-[10px] h-[10px] rounded-full bg-[#ff5f57]" />
            <span className="w-[10px] h-[10px] rounded-full bg-[#febc2e]" />
            <span className="w-[10px] h-[10px] rounded-full bg-[#28c840]" />
          </div>
          <div className="justify-self-center flex items-center gap-[6px] min-w-0 max-w-[min(340px,100%)] h-[24px] px-3 rounded-[7px] bg-card border border-line text-[11.5px] text-body">
            <LockIcon />
            <span className="truncate">{screenshot.address}</span>
          </div>
          <span className="w-[44px] max-[480px]:w-0" aria-hidden="true" />
        </div>
        <div className="relative w-full bg-page" style={{ aspectRatio: IMAGE_RATIO }}>
          <img
            src={screenshot.src}
            alt={screenshot.alt}
            className="absolute inset-0 w-full h-full object-cover object-top"
            draggable="false"
            decoding="async"
          />
        </div>
      </figure>
    </div>
  );
}

export default BrowserPreview;
