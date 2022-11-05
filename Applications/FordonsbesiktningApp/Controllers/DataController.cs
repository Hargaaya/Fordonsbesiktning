using FordonsbesiktningApp.Models.DTOs;
using FordonsbesiktningApp.Services;
using Microsoft.AspNetCore.Mvc;

namespace FordonsbesiktningApp.Controllers
{
    [ApiController]
    [Route("api/")]
    public class DataController : ControllerBase
    {
        private IDataService _ds;

        public DataController(IDataService ds)
        {
            _ds = ds;
        }

        [HttpGet("subsystems/{Id}")]
        public List<SubsystemDTO>? GetSubsystems(string Id)
        {
            return _ds.getSubsystems(Id);
        }
    }
}
