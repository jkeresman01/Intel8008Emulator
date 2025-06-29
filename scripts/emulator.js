import { CPU } from './cpu.js';
import { Memory } from './memory.js';
import { Bus } from './bus.js';
import { Assembler } from './assembler.js';
import { setupHexModal } from '../components/hexModal.js';

const memory = new Memory(0x4000);
const cpu = new CPU();

const bus = new Bus(cpu, memory);

cpu.connectBus(bus);

const assembler = new Assembler();

document.getElementById('assembleBtn').onclick = () => {
  const sourceCode = document.getElementById('source').value;
  const machineCode = assembler.assemble(sourceCode);

  //memory.load(0x0000, machineCode);

  console.log("Assemble .... ")
};

document.getElementById('disassembleBtn').onclick = () => {
  const code = memory.dump(0x0000, 0x0100);

  console.log("Disasemle .... ")
};

document.getElementById('stepBtn').onclick = () => {
  cpu.step();

  console.log("CPU step ...")
};

document.getElementById('resetBtn').onclick = () => {
  cpu.reset();

  console.log("CPU reset")
};

setupHexModal(memory);
