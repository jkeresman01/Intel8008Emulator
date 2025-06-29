export function setupHexModal(memory) {
  const modal = document.getElementById("hexModal");
  const output = document.getElementById("hexDumpOutput");
  const close = document.getElementById("closeModal");

  document.getElementById("hexDumpBtn").onclick = () => {
    const data = memory.dump(0x0000, 0x0100);
    output.textContent = formatHex(data);
    modal.classList.remove("hidden");
  };

  close.onclick = () => modal.classList.add("hidden");

  function formatHex(data) {
    return data
      .map((b, i) =>
        i % 16 === 0
          ? `\n${i.toString(16).padStart(4, "0")}: ${b
              .toString(16)
              .padStart(2, "0")}`
          : ` ${b.toString(16).padStart(2, "0")}`
      )
      .join("");
  }
}
