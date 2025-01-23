using DataLibrary.DataAccess;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataLibrary.Logic
{
    public class GradelvlAProcessor
    {
        public static List<GradelvlA> LoadGradelvl()
        {
            string sql = @"select GradeID, Gradelevel
                            from dbo.GradeLevel;";

            return SqlDataAccess.LoadData<GradelvlA>(sql);
        }
    }
}
