using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataLibrary.Models
{
    public class Subject
    {
        public int SubjectID { get; set; }
        public string SubjectTitle { get; set; }
        public string SubjectPicture { get; set; }
        public int GradeID { get; set; }
        public int UserID { get; set; }
    }
}
