using FordonsbesiktningApp.Models.DTOs;

namespace FordonsbesiktningApp.Services
{
    public interface IDataService
    {
        public List<SystemDTO> getSystems();

        public List<SubsystemDTO>? getSubsystems(string Id);
    }
}
