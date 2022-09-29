using GYFChallenge.Models;
using GYFChallenge.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace GYFChallenge.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : Controller
    {
        private IProductCollection db = new ProductCollection();

        [HttpGet]
        public async Task<IActionResult> GetAllProducts()
        {
            return Ok(await db.GetAllProducts());
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetProductsDetails(string id)
        {
            return Ok(await db.GetProductById(id));
        }

        [HttpPost]
        public async Task<IActionResult> CreateProduct([FromBody] Products product)
        {
            if (product == null)
                return BadRequest();

            if (string.IsNullOrEmpty(product.name))
                ModelState.AddModelError("name", "El nombre no puede estar vacío");

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            await db.InsertProduct(product);
            return Created("Created", true);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateProduct([FromBody] Products product, string id)
        {
            if (product == null)
                return BadRequest();

            if (string.IsNullOrEmpty(product.name))
                ModelState.AddModelError("Name", "El nombre no puede estar vacío");

            //product.Id = new MongoDB.Bson.ObjectId(id);
            product.id = id;
            await db.UpdateProduct(product);
            return Created("Created", true);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProduct(string id)
        {
            await db.DeleteProduct(id);
            return NoContent();
        }
    }
}
