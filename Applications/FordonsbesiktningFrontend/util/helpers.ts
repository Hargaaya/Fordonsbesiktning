import { ControlProgram } from "../util/types";

export function capitalize(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function lowercase(string: string): string {
  return string.charAt(0).toLowerCase() + string.slice(1);
}

export function readableList(arr: Array<string>): string {
  let result = arr[0];
  if (arr.length > 3) result += ", ";
  result += arr
    .slice(1, arr.length - 2)
    .map((item) => lowercase(item))
    .join(", ");
  result += " och " + lowercase(arr[arr.length - 1]);

  return result;
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
