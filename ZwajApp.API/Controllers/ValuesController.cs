using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ZwajApp.API.Data;
using ZwajApp.API.Models;

namespace ZwajApp.API.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        private readonly DataContext _context;

        public ValuesController(DataContext context)
        {
            _context = context;
        }
        // GET api/values
        // GET http://localhost:5000/api/values/GetValues
        [HttpGet]
        public async Task<IActionResult> GetValues()
        {
            // throw new Exception("test Exception");
            var values =await _context.Values.ToListAsync();
             return Ok(values);
        }

        // GET api/values/5
        [AllowAnonymous]
        [HttpGet("{id}")]
        public async Task<IActionResult> GetValueAsync(int id)
        {
            var value =await _context.Values.FirstOrDefaultAsync(x=>x.id==id);
 
            return Ok(value);
        }

        // GET api/user/firstname/lastname/address
        [HttpGet("{firstName}/{lastName}/{address}")]
        public IActionResult GetValue(string firstName, string lastName, string address)
        {
            return Ok(firstName + lastName);
        }

        // POST api/values
        [HttpPost] 
        public void Post([FromBody] string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
