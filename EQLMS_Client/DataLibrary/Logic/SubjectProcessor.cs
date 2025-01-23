using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DataLibrary.DataAccess;
using DataLibrary.Models;
using System.Data.SqlClient;

namespace DataLibrary.Logic
{
    public class SubjectProcessor
    {
        public static List<Subject> LoadSubject1()
        {
            string sql = @"select SubjectID, SubjectTitle, SubjectPicture, GradeID 
                            from dbo.Subject where GradeID = 1;";

            return SqlDataAccess.LoadData<Subject>(sql);
        }
    
        public static List<Subject> LoadSubject2()
        {
            string sql = @"select SubjectID, SubjectTitle, SubjectPicture, GradeID 
                            from dbo.Subject where GradeID = 2;";

            return SqlDataAccess.LoadData<Subject>(sql);
        }
    
        public static List<Subject> LoadSubject3()
        {
            string sql = @"select SubjectID, SubjectTitle, SubjectPicture, GradeID 
                            from dbo.Subject where GradeID = 3;";

            return SqlDataAccess.LoadData<Subject>(sql);
        }
    
        public static List<Subject> LoadSubject4()
        {
            string sql = @"select SubjectID, SubjectTitle, SubjectPicture, GradeID 
                            from dbo.Subject where GradeID = 4;";

            return SqlDataAccess.LoadData<Subject>(sql);
        }
    
    
        public static List<Subject> LoadSubject5()
        {
            string sql = @"select SubjectID, SubjectTitle, SubjectPicture, GradeID 
                            from dbo.Subject where GradeID = 5;";

            return SqlDataAccess.LoadData<Subject>(sql);
        }
    
    
        public static List<Subject> LoadSubject6()
        {
            string sql = @"select SubjectID, SubjectTitle, SubjectPicture, GradeID 
                            from dbo.Subject where GradeID = 6;";

            return SqlDataAccess.LoadData<Subject>(sql);
        }
    
    
        public static List<Subject> LoadSubject7()
        {
            string sql = @"select SubjectID, SubjectTitle, SubjectPicture, GradeID 
                            from dbo.Subject where GradeID = 7;";

            return SqlDataAccess.LoadData<Subject>(sql);
        }
    
        public static List<Subject> LoadSubject8()
        {
            string sql = @"select SubjectID, SubjectTitle, SubjectPicture, GradeID 
                            from dbo.Subject where GradeID = 8;";

            return SqlDataAccess.LoadData<Subject>(sql);
        }
    }
}
