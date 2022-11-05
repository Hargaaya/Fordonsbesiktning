namespace FordonsbesiktningBackend.Models.DTOs
{
    public class SubsystemDTO
    {
        public string? Id { get; set; }
        public string? Name { get; set; }

        // Subsubsystem
        public List<SubsystemDTO> Subsystems { get; set; } = new List<SubsystemDTO>();


        public List<ControlPoint> Control { get; set; } = new List<ControlPoint>();
        public List<Method> Method { get; set; } = new List<Method>();
        public string? Assessment { get; set; }
    }

    public class ControlPoint
    {
        public string? Point { get; set; }
        public List<string>? Points { get; set; }
        public string? Detail { get; set; }
    }

    public class Method
    {
        public string? Type { get; set; }
        public List<string>? Types { get; set; }
        public string? Description { get; set; }
    }
}
