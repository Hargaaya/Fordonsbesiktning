using FordonsbesiktningApp.Models.DTOs;

namespace FordonsbesiktningApp.Services
{
    public interface IDataService
    {
        public List<SystemDTO> getSystems();
    }
}
