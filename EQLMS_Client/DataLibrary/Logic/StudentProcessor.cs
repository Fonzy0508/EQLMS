using DataLibrary.DataAccess;
using DataLibrary.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.SqlClient;

namespace DataLibrary.Logic
{
    public static class StudentProcessor
    {
        public static int CreateStudent(int lrnid, string fname, string mname, string lname,
                 string email, string password, int age, int contact, int Pcontact, string add, int grlvlid, int sectionid)
        {
            StudentAccModels data = new StudentAccModels
            {
                LRNID = lrnid,
                FirstName = fname,
                MiddleName = mname,
                LastName = lname,
                Email = email,
                Password = password,
                Age = age,
                ContactNumber = contact,
                ParentContactNum = Pcontact,
                Address = add,
                GradeID = grlvlid,
                SectionID = sectionid
            };

            string sql = @"insert into dbo.StudentAcc (LRNID, FirstName, MiddleName, LastName, Email, Password, Age, ContactNumber, ParentContactNum, Address, GradeID, SectionID)
                        values (@LRNID, @FirstName, @MiddleName, @LastName, @Email, @Password, @Age, @ContactNumber, @ParentContactNum, @Address, @GradeID, @SectionID)";

            return SqlDataAccess.SaveData(sql, data);
        }

        public static int CreateTeacher(int userid, string fname, string mname, string lname,
                string email, string password, int age, int contact, string address)
        {
            TeacherAccModels data = new TeacherAccModels
            {
                UserID = userid,
                FirstName = fname,
                MiddleName = mname,
                LastName = lname,
                Email = email,
                Password = password,
                Age = age,
                ContactNumber = contact,
                Address = address
                
            };

            string sql = @"insert into dbo.TeacherAcc (UserID, FirstName, MiddleName, LastName, Email, Password, Age, ContactNumber, Address)
                        values (@UserID, @FirstName, @MiddleName, @LastName, @Email, @Password, @Age, @ContactNumber, @Address)";

            return SqlDataAccess.SaveData(sql, data);
        }
        
        public static int CreateAdmin(int userid, string fname, string mname, string lname,
                string email, string password, int age, int contact, string address)
        {
            AdminAcc data = new AdminAcc
            {
                UserID = userid,
                FirstName = fname,
                MiddleName = mname,
                LastName = lname,
                Email = email,
                Password = password,
                Age = age,
                ContactNumber = contact,
                Address = address
                
            };

            string sql = @"insert into dbo.AdminAcc (UserID, FirstName, MiddleName, LastName, Email, Password, Age, ContactNumber, Address)
                        values (@UserID, @FirstName, @MiddleName, @LastName, @Email, @Password, @Age, @ContactNumber, @Address)";

            return SqlDataAccess.SaveData(sql, data);
        }
        public static int CreateRegistrar(int userid, string fname, string mname, string lname,
                string email, string password, int age, int contact, string address)
        {
            RegistrarAcc data = new RegistrarAcc
            {
                RegistrarID = userid,
                FirstName = fname,
                MiddleName = mname,
                LastName = lname,
                Email = email,
                Password = password,
                Age = age,
                ContactNumber = contact,
                Address = address
                
            };

            string sql = @"insert into dbo.RegistrarAcc (RegistrarID, FirstName, MiddleName, LastName, Email, Password, Age, ContactNumber, Address)
                        values (@RegistrarID, @FirstName, @MiddleName, @LastName, @Email, @Password, @Age, @ContactNumber, @Address)";

            return SqlDataAccess.SaveData(sql, data);
        }

        public static List<TeacherAccModels>  LoadTeachers()
        {
            string sql = @"select UserID, FirstName, MiddleName, LastName, Email, Password, Age, Address, ContactNumber 
                            from dbo.TeacherAcc;";

            return SqlDataAccess.LoadData<TeacherAccModels>(sql);
        }
        

        public static List<AdminAcc>  LoadAdmin()
        {
            string sql = @"select AccountID, UserID, FirstName, MiddleName, LastName, Email, Password, Age, Address, ContactNumber 
                            from dbo.AdminAcc;";

            return SqlDataAccess.LoadData<AdminAcc>(sql);
        }
        public static List<RegistrarAcc>  LoadRegistrar()
        {
            string sql = @"select AccountID, RegistrarID, FirstName, MiddleName, LastName, Email, Password, Age, Address, ContactNumber 
                            from dbo.RegistrarAcc;";

            return SqlDataAccess.LoadData<RegistrarAcc>(sql);
        }

        public static List<StudentAccModels> LoadStudents()
        {
            string sql = @"select LRNID, FirstName, MiddleName, LastName, Email, Password, Age, ContactNumber, ParentContactNum, Address, GradeID, SectionID
                            from dbo.StudentAcc;";

            return SqlDataAccess.LoadData<StudentAccModels>(sql);
        }
        
        public static List<Subject> LOadsubjteach(int userid)
        {
            SqlCommand com = new SqlCommand();
            string sql = @"select * from dbo.Subject where UserID = @ID;";
            com.Parameters.AddWithValue("@ID", userid);

            return SqlDataAccess.LoadData<Subject>(sql);
        }
        
        //public static List<StudentAccModels> loginget()
        //{
        //    string sql = @"select LRNID, FirstName, MiddleName, LastName, Email, Password,
        //                    Age, Contact, PContact, GradelevelID, SectionID
        //                    from dbo.StudentAcc where";

        //    return SqlDataAccess.LoadData<StudentAccModels>(sql);
        //}



    }
}
