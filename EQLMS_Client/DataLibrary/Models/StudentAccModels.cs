using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataLibrary.Models
{
    public class StudentAccModels
    {
        public int LRNID { get; set; }
        public string FirstName { get; set; }
        public string MiddleName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public int Age { get; set; }
        public int ContactNumber { get; set; }
        public int ParentContactNum { get; set; }
        public string Address { get; set; }
        public int GradeID { get; set; }
        public int SectionID { get; set; }
    }
   
}
