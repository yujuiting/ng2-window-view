export interface WindowViewCanClose {
    /**
     * Be call before window close.
     * Return true if allow, return false will interrupt closing.
     */
    windowViewCanClose: () => boolean;
}
