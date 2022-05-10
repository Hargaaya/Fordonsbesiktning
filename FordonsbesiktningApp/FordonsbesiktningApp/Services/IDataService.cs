using FordonsbesiktningApp.Models.DTOs;

namespace FordonsbesiktningApp.Services
{
    public interface IDataService
    {
        public SchemaDTO getSchema();
        public List<SystemDTO> getSystems(string Id);
        public List<SubsystemDTO> getSubsystem(string Id);
    }
}
