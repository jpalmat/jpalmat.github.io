/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package connector;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author jimmypalma
 */
public class DbConnection {

	static Connection connection  = null;
	static String databaseName = "entries";
	static String url = "jdbc:mysql://localhost:3306/" + databaseName + "?autoReconnect=true&useSSL=false";
	
	static String username = "root";
	static String password = "Password01@";
	private static Connection conn = null;
	
	public String getConnection(String word1) throws SQLException {
            System.out.print("entro a la conexion");
		List<String> str = new ArrayList<String>();
		if(conn == null) {
			try {
				Class.forName("com.mysql.jdbc.Driver");
			} catch (ClassNotFoundException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			conn = DriverManager.getConnection(url, username, password);
			System.out.println("Got connection...");
		}
		
		
		Statement stmt = conn.createStatement();
		String query = "select * from entries.entries where word ='"+word1+"';";
        ResultSet rs = stmt.executeQuery(query);
        StringBuilder str2 = new StringBuilder();
   		int count = 0;
        while (rs.next()) {
        	
        	
            String word = rs.getString("word").trim();
            
          //  System.out.println(word);
            String wordtype = rs.getString("wordtype").trim();
           // System.out.println(wordtype);
            String definition = rs.getString("definition").trim();
            //System.out.println(definition);

//            if(count==0) {
//				str.add(word + " " + wordtype + " " + definition);
//				str2.append(word + "\n");
//			}
			str.add(wordtype +" "+ definition);
          	str2.append(wordtype +" "+ definition + "<br>");
			System.out.println(str.get(count));
			count++;

        }
        return str2.toString();
	
	}
}
