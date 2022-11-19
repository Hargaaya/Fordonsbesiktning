export interface ControlProgram {
  id: string;
  name: string;
  subsystems?: ControlProgram[];
  control: Controls[];
  method: Methods[];
  assessment: string;
}

export interface Controls {
  point?: string;
  points?: Array<string>;
  detail?: string;
}

export interface Methods {
  type: string;
  description?: string;
}
