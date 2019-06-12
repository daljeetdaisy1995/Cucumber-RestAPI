package RestAPI;

import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import org.json.JSONObject;
import org.testng.annotations.Test;

import static io.restassured.RestAssured.given;

public class TestAPI {

    private String baseURI = RestAssured.baseURI="http://dummy.restapiexample.com/api/v1/";
    private String employees="employees";
    private String employeeWithId ="employee/";
    private String create ="create/";
    private String update = "update/";
    private String delete = "delete/";


    @Test
    public void testGetAllEmployeeInfo(){
        Response response = given().when().get(employees).then().extract().response();
        System.out.println("response is : " +response.asString());
        System.out.println("response code is : " +response.getStatusCode());

        JsonPath jsonPath = new JsonPath(response.asString());
        System.out.println("employees name : "+jsonPath.get("employee_name").toString());

    }

    @Test
    public void testGetSpecificEmployee(){
        Response response = given().when().get(employeeWithId+22157).then().statusCode(200).extract().response();
        System.out.println("response is : " +response.asString());
        System.out.println("response code is : " +response.getStatusCode());
    }

    @Test
    public void testPostCalls(){
        //storing all the parameters in the JSONObject
        JSONObject jsonObject = new JSONObject();
        jsonObject.put("name","peopleNtech");
        jsonObject.put("salary","100000");
        jsonObject.put("age","22");
        System.out.println(jsonObject);

//creating the response
        Response response = given().header("Content-Type", "application/json").
                body(jsonObject.toString()).when().post(create).then().statusCode(200).extract().response();
        //printing the response
        System.out.println(response.asString());
    }

    @Test
    public void testPutCalls(){
        String requestBody = "{\r\n" +
                " \"name\":\"Daljeet\",\r\n" +
                " \"salary\":\"100000\",\r\n" +
                " \"age\":\"23\"\r\n" +
                "}";

        Response response = given().contentType(ContentType.JSON).
                body(requestBody).put(update+22116);
    }

    @Test
    public void testDeleteCalls(){
        Response response = given().contentType(ContentType.JSON).
                delete(delete+22119);
        System.out.println(response.toString());
    }
}
