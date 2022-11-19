import { ControlProgram } from "../util/types";

export function capitalize(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function hasComponentData(data: ControlProgram): boolean {
  if (!data.method.length && !data.control.length && data.assessment == null) {
    return false;
  } else {
    return true;
  }
}

export function isEmpty(data: Array<any>): boolean {
  return data.length == 0;
}

export function isNull(data: any): boolean {
  return data == null;
}
