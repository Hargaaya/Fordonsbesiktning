using FordonsbesiktningApp.Services;
using Microsoft.AspNetCore.Mvc;

namespace FordonsbesiktningApp.Controllers
{
    [ApiController]
    [Route("api/basic")]
    public class BasicController : ControllerBase
    {
        private IDataService _ds;

        public BasicController(IDataService ds)
        {
            _ds = ds;
        }

        [HttpGet("names")]
        public List<string> Index()
        {
            var names = new List<string> { "Brahnen", "Jard", "Sauzie", "Erson" };
            _ds.getSchema();
            return names;
        }
    }
}
