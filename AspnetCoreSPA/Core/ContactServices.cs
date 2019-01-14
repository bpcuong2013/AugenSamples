using System.Collections.Generic;
using System.IO;
using System.Linq;
using Domain;
using Domain.Params;
using Utility;

namespace Core
{
    public class ContactServices
    {
        public DataResult GetCSVFile(ContactParams searchParam)
        {
            string currentPath = Directory.GetCurrentDirectory();
            List<SampleData> dataList = new List<SampleData>();
            bool isFirtLine = true;
            using (var reader = new StreamReader(currentPath + "/SampleData.csv"))
            {
                while (!reader.EndOfStream)
                {
                    var line = reader.ReadLine();
                    if (isFirtLine)
                    {
                        isFirtLine = false;
                        continue;
                    }

                    var values = line.Split(',');
                    if (values.Length > 10)
                    {
                        if (!string.IsNullOrEmpty(searchParam.SearchKey))
                        {
                            if ((!string.IsNullOrEmpty(values[0]) && values[0].ToLower().Trim().Contains(searchParam.SearchKey.ToLower().Trim())) ||
                              (!string.IsNullOrEmpty(values[1]) && values[1].ToLower().Trim().Contains(searchParam.SearchKey.ToLower().Trim())) ||
                              (!string.IsNullOrEmpty(values[9]) && values[9].ToLower().Trim().Contains(searchParam.SearchKey.ToLower().Trim())) ||
                              (!string.IsNullOrEmpty(values[7]) && values[7].ToLower().Trim().Contains(searchParam.SearchKey.ToLower().Trim())))
                            {

                                /// <summary>
                                /// We can clean inpudate data here to make sure that we get correct data, such as: email, phone
                                /// For this case, I just clean email value
                                /// </summary>

                                if (ContactUtilities.IsValidEmail(values[9]))
                                {
                                    dataList.Add(new SampleData
                                    {
                                        FirstName = values[0],
                                        LastName = values[1],
                                        CompanyName = values[2],
                                        Address = values[3],
                                        City = values[4],
                                        State = values[5],
                                        Post = values[6],
                                        Phone1 = values[7],
                                        Phone2 = values[8],
                                        Email = values[9],
                                        Web = values[10],
                                    });
                                }
                            }
                        }
                        else
                        {
                            if (ContactUtilities.IsValidEmail(values[9]))
                            {
                                dataList.Add(new SampleData
                                {
                                    FirstName = values[0],
                                    LastName = values[1],
                                    CompanyName = values[2],
                                    Address = values[3],
                                    City = values[4],
                                    State = values[5],
                                    Post = values[6],
                                    Phone1 = values[7],
                                    Phone2 = values[8],
                                    Email = values[9],
                                    Web = values[10],
                                });
                            }
                        }
                    }
                }
            }

            int itemTotal = dataList.Count;
            int pageTotal = itemTotal / searchParam.PageSize;
            List<SampleData> dataResult = new List<SampleData>();

            if (!string.IsNullOrEmpty(searchParam.SearchKey))
            {
                dataResult = dataList.Skip(0).Take(searchParam.PageSize).ToList();
            }
            else
            {
                int realPageIndex = searchParam.PageIndex - 1;
                dataResult = dataList.Skip(realPageIndex * searchParam.PageSize).Take(searchParam.PageSize).ToList();
            }

            return new DataResult
            {
                Contacts = dataResult,
                PageTotal = pageTotal,
                ItemTotal = itemTotal
            };
        }
    }
}
