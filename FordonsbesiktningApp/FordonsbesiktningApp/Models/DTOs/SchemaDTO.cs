namespace FordonsbesiktningApp.Models.DTOs
{
    public class SchemaDTO
    {
        public string? Id { get; set; }
        public string? Name { get; set; }
        public string? ImageUrl { get; set; }
        public List<SystemDTO> Systems { get; set; } = new List<SystemDTO>();

    }
}
