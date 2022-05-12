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

        [HttpGet("systems")]
        public List<SystemDTO> Index()
        {
            return _ds.getSystems();
        }
    }
}
