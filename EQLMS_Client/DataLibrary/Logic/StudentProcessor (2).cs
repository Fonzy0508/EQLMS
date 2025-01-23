using System;
using DataLibrary.Models;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DataLibrary.DataAccess;

namespace DataLibrary.Logic
{
    public static class StudentProcessor
    {
        public static int CreateStudentAcc(int lrnID, string FName, string MName, 
               string LName, string email, string password, int age, int contactNum, int PCnum,
               int gradelvlid, int sectionID)
        {
            StudentAcc_EqlmsModels data = new StudentAcc_EqlmsModels
            {
                LRNID = lrnID,
                FirstName = FName,
                MiddleName = MName,
                LastName = LName,
                Email = email,
                Password = password,
                Age = age,
                ContactNumber = contactNum,
                ParentContactNum = PCnum,
                GradelevelID = gradelvlid,
                SectionID = sectionID,
            };

            string sql = @"insert into dbo.StudentTbl (LRNID, FirstName, MiddleName, LastName, Email, Password, Age, ContactNumber, ParentContactNum, GradelevelID, SectionID, ProfilePicture)
                        values (@LRNID, @FirstName, @MiddleName, @LastName, @Email, @Password, @Age, @ContactNumber, @ParentContactNum, @GradelevelID, @SectionID)";

            return SqlDataAccess.SaveData(sql, data);             
        }

        public static List<StudentAcc_EqlmsModels> loadStudent()
        {
            string sql = @"select AccountID, LRNID, FirstName, MiddleName, LastName, Email, Password, Age, ContactNumber, ParentContactNum, GradelevelID, SectionID, ProfilePicture
                           from dbo.StudentTbl;";
            return SqlDataAccess.LoadData<StudentAcc_EqlmsModels>(sql);
        }
    }
}
