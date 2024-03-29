package controller;

import app.Alphabet;
import com.google.gson.Gson;
import data.Mock;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;

import static java.lang.System.out;

@WebServlet("/alphabet")
public class AlphabetServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        Mock data = new Mock();
        ArrayList<Alphabet> alphabetList = data.retrieveAlphabetList();

        request.setAttribute("alphabetList",alphabetList);
        RequestDispatcher view = request.getRequestDispatcher("alphabet.jsp");
        view.forward(request,response);
    }
}
