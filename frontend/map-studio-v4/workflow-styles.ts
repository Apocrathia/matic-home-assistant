import { css } from "lit";

// Shell rules for markup that renders only once the workflow chunk is ready
// (the Back button, the action bar's summary and jump, the grip's Back
// column and the precision popover). The discard dialog stays with the shell:
// a Draw draft can be dirty while this chunk failed. The shell adopts them with its
// own styles when the chunk loads, so startup does not carry them.
export const shellWorkflowStyles = css`
    .precision-popover {
      position: absolute;
      z-index: 9;
      inset-inline-end: var(--ms-space-3);
      inset-block-end: 5.5rem;
      inline-size: 0;
      block-size: 0;
    }

    .panel-back { flex: none; }

    .action-summary { margin: 0; overflow: hidden; color: var(--ms-text-quiet); font-size: var(--ms-t-xs); line-height: var(--ms-lh-snug); text-overflow: ellipsis; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2; }
    /* A landscape phone keeps the bar to its button (home-rooms.md §7). */
    @media (max-height: 479px) { .action-summary { display: none; } }

    .action-jump { text-decoration: underline; }


    .narrow .panel-back { inline-size: var(--ms-control); padding-inline: 0; }
    .narrow .panel-back .ms-btn__label {
      position: absolute;
      overflow: hidden;
      inline-size: 1px;
      block-size: 1px;
      margin: -1px;
      clip-path: inset(50%);
      white-space: nowrap;
    }

    .narrow .sheet-grip:has(.sheet-back) { grid-template-columns: auto minmax(0, 1fr) auto auto; }
    .narrow .precision-popover { position: static; inline-size: auto; block-size: auto; }

`;
