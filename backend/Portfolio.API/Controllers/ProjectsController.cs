using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Portfolio.API.Data;
using Portfolio.API.Models;

namespace Portfolio.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProjectsController : ControllerBase
    {
        private readonly AppDbContext _context;
        public ProjectsController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Project>>> GetProjects()
        {
            return await _context.Projects.ToListAsync();
        }

        [HttpPost]
        public async Task<ActionResult<Project>> CreateProject(Project project)
        {
            _context.Projects.Add(project);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetProjects), new { id = project.Id }, project);
        }
    }
}
