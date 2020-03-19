package dictServlet;

import connector.DbConnection;
import java.io.IOException;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class DictServlet
 */
//@WebServlet(name = "DictServlet")
public class DictServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public DictServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		String word = request.getParameter("word");
		
		System.out.println("Hello world");
		DbConnection fetch = new DbConnection();
		try {
//			System.out.println("Hello world worked");
			//fetch.getConnection(word);
			response.getWriter().print(fetch.getConnection(word));
			System.out.println(" data new = "+fetch.getConnection(word));
			//System.out.println("Hellow world worked");
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			//System.out.println("Hello world catch");
			e.printStackTrace();
		}
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		//doGet(request, response);
	}

}
