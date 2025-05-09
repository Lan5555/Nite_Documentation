
export function setupAutoPairs(selector: HTMLTextAreaElement): HTMLTextAreaElement | any {
  const textarea = selector;
  if (!textarea) return null;

  const pairs: Record<string, string> = {
    "(": ")",
    "[": "]",
    "{": "}",
    "\"": "\"",
    "'": "'",
    "`": "`"
  };

  textarea.addEventListener("keydown", function (e) {
    const open = e.key;
    const close = pairs[open];

    if (close) {
      e.preventDefault();
      const start = this.selectionStart;
      const end = this.selectionEnd;
      const text = this.value;

      this.value = text.slice(0, start) + open + close + text.slice(end);
      this.setSelectionRange(start + 1, start + 1); // place cursor between pair
    }
  });

  return textarea;
}
