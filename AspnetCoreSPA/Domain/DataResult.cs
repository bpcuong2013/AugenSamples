using System;
using System.Collections.Generic;

namespace Domain
{
    public class DataResult
    {
        public DataResult()
        {
            Contacts = new List<SampleData>();
        }

        public List<SampleData> Contacts { get; set; }
        public int PageTotal { get; set; }
        public int ItemTotal { get; set; }
    }
}
