using FordonsbesiktningBackend.Models.DTOs;

namespace FordonsbesiktningBackend.Services
{
    public interface IDataService
    {
        public List<SubsystemDTO>? getSubsystems(string Id);
    }
}
