using GYFChallenge.Models;
using GYFChallenge.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace GYFChallenge.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : Controller
    {
        private readonly IProductCollection _productCollection;

        public ProductController(IProductCollection productCollection)
        {
            _productCollection = productCollection;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllProducts()
        {
            return Ok(await _productCollection.GetAllProducts());
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetProductsDetails(string id)
        {
            return Ok(await _productCollection.GetProductById(id));
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

            await _productCollection.InsertProduct(product);
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
            await _productCollection.UpdateProduct(product);
            return Created("Created", true);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProduct(string id)
        {
            await _productCollection.DeleteProduct(id);
            return NoContent();
        }
    }
}
