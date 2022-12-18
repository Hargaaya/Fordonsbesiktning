interface ControlProgram {
  id: string;
  name: string;
  subsystems?: ControlProgram[];
  control: Controls[];
  method: Methods[];
  assessment: string;
}

interface Controls {
  point?: string;
  points?: Array<string>;
  detail?: string;
}

interface Methods {
  type: string;
  description?: string;
}
