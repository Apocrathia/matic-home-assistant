import { css } from "lit";

// Shell rules for markup that renders only once the workflow chunk is ready
// (the Back button, the action bar's summary and jump, the grip's Back
// column, the Map options menu and the sheet's brush settings). The discard dialog stays with the shell:
// a Draw draft can be dirty while this chunk failed. The shell adopts them with its
// own styles when the chunk loads, so startup does not carry them.
export const shellWorkflowStyles = css`

    /* The Map options menu renders only from this chunk. */
    .overflow-menu {
      position: absolute;
      z-index: 18;
      inset-block-start: calc(100% + var(--ms-space-1));
      inset-inline-end: 0;
      display: grid;
      gap: var(--ms-space-1);
      min-inline-size: 14rem;
      padding: var(--ms-space-1);
    }
    .overflow-menu .ms-row { justify-content: flex-start; }
    .overflow-menu [role="menuitemcheckbox"] { justify-content: space-between; gap: var(--ms-space-3); }
    .overflow-menu [role="group"] { display: grid; gap: var(--ms-space-1); }
    .overflow-menu [role="group"] + * { border-block-start: 1px solid var(--ms-line); padding-block-start: var(--ms-space-1); }
    .menu-heading { margin: 0; padding: var(--ms-space-2) var(--ms-space-3) var(--ms-space-1); color: var(--ms-text-quiet); font-size: var(--ms-t-sm); font-weight: var(--ms-w-bold); }

    .panel-back { flex: none; }

    /* Home shortcuts (home-shortcuts.ts): the name stays on one line, and
       every due line shows in full (owner, 2026-10-13). The open button
       sits beside the card, a 44 px target of its own. */
    .quick-actions .card-title { display: flex; gap: var(--ms-space-1) var(--ms-space-2); align-items: center; min-inline-size: 0; }
    .quick-actions .card-name { overflow: hidden; min-inline-size: 0; text-overflow: ellipsis; white-space: nowrap; }
    .quick-actions .card-title .ms-chip { flex: none; }
    .quick-actions .card-lines { display: block; margin-block-start: 0.125rem; color: var(--ms-text); font-size: var(--ms-t-xs); line-height: var(--ms-lh-snug); }
    .quick-actions .ms-row[aria-disabled="true"] .card-lines { color: var(--ms-text-disabled); }
    /* A held shortcut's reason is the one thing that says why: readable text. */
    .quick-actions .ms-row[aria-disabled="true"] .line[data-tone="warning"] { color: var(--ms-text-quiet); }
    .shortcut:not([aria-disabled="true"]) .ms-row__lead { color: var(--ms-resolved-indicator, var(--ms-accent)); }
    .quick-actions .line { display: block; padding-inline-start: 1.25rem; text-indent: -1.25rem; }
    .quick-actions .line .ms-icon { display: inline-block; inline-size: 1rem; block-size: 1rem; margin-inline-end: var(--ms-space-1); vertical-align: -0.1875rem; color: var(--ms-resolved-indicator, var(--ms-accent)); }
    .quick-actions .line[data-tone="warning"] .ms-icon { color: var(--ms-warning); }
    .pins-error { margin: 0; color: var(--ms-text-quiet); font-size: var(--ms-t-xs); line-height: var(--ms-lh-snug); }

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
    .narrow .sheet-precision { display: block; margin-block-end: var(--ms-space-2); }
    .narrow .sheet-hint { margin: 0 0 var(--ms-space-2); color: var(--ms-text-quiet); font-size: var(--ms-t-xs); line-height: var(--ms-lh-snug); }

`;
