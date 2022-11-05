namespace FordonsbesiktningApp.Models.DTOs
{
    public class SystemDTO
    {
        public string? Id { get; set; }
        public string? Name { get; set; }
        public string? Image { get; set; }
        public List<SubsystemDTO> Subsystems { get; set; } = new List<SubsystemDTO>();

    }
}
