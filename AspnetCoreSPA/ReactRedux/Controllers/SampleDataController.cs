using Microsoft.AspNetCore.Mvc;
using Domain;
using Domain.Params;
using Core;

namespace ReactRedux.Controllers
{
    [Route("api/contacts")]
    public class SampleDataController : Controller
    {
        /// <summary>
        /// The main method. we can solve this pagging issue from client side or server side. 
        /// If we use pagging side from client, we will get all data at the first time. Currently, 
        /// I do it from server, each page selector, I will make a request with params: pageIndex, pageSize , search key
        /// For new website, They allow user configuration page size from client
        /// </summary>

        [HttpPost]
        [Route("search")]
        public DataResult GetDataAsync([FromBody]ContactParams searchParam)
        {
            ContactServices contactManager = new ContactServices();
            return contactManager.GetCSVFile(searchParam);
        }
    }
}
