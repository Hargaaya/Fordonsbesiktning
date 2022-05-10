namespace FordonsbesiktningApp.Models.DTOs
{
    public class SubsystemDTO
    {
        public string? Id { get; set; }
        public string? Name { get; set; }
        public string? Description { get; set; }
        public List<ControlPoint> ControlPoints { get; set; } = new List<ControlPoint>();
        public List<Method> Methods { get; set; } = new List<Method>();
        public string? Assessment { get; set; }
    }

    public class ControlPoint
    {
        public string? Point { get; set; }
        public string? Description { get; set; }
    }

    public class Method
    {
        public string? Type { get; set; }
        public string? Description { get; set; }
    }
}