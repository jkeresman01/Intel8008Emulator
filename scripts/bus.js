export class Bus {
  constructor(cpu, memory) {
    this.cpu = cpu;
    this.memory = memory;
  }

  read(addr) {
    return this.memory.read(addr);
  }

  write(addr, value) {
    this.memory.write(addr, value);
  }
}