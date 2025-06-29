export class Memory {
  constructor(size) {
    this.memory = new Uint8Array(size);
  }

  read(addr) {
    return this.memory[addr & 0x3FFF]; // 14-bit address space
  }

  write(addr, value) {
    this.memory[addr & 0x3FFF] = value & 0xFF;
  }

  load(start, bytes) {
    for (let i = 0; i < bytes.length; i++) {
      this.write(start + i, bytes[i]);
    }
  }

  dump(start, end) {
    return this.memory.slice(start, end);
  }
}
