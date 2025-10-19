import {nowIs} from "./time"
import { performance } from "node:perf_hooks";

const startTime = performance.now();

console.log("Hello world!");
console.log(`Now is ${nowIs()}`);

const endTime = performance.now();
console.log(`Task completed in ${endTime - startTime} milliseconds.`);
