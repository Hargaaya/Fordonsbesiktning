using Microsoft.AspNetCore.Mvc;

namespace FordonsbesiktningApp.Controllers
{
    [ApiController]
    [Route("api/basic")]
    public class BasicController : ControllerBase
    {
        [HttpGet("names")]
        public ActionResult<List<string>> Index()
        {
            var names = new List<string> { "Brahnen", "Jard", "Sauzie", "Erson" };
            return names;
        }
    }
}
