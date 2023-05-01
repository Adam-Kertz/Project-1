function draw_weather(obj, state) {
    obj.sourceRect = new createjs.Rectangle(state * 33, 0, 33, 33);
    if (document.getElementById("visibility").value < 7 && state == 0) {
        document.getElementById("message").innerHTML = "An obstruction to visibility must be selected because visibility is less than 7 miles.";
    } else {
        document.getElementById("message").innerHTML = "";
    }
}

function draw_sky(obj, sky_state) {
    obj.graphics.clear();
    if (sky_state == 1) {
        obj.graphics.ss(8).s("#000").f("rgba(0,0,0,0)").mt(0, 24).lt(0, -24);
    } else if (sky_state == 7) {
        obj.graphics.ss(0).s("#000").f("rgba(0,0,0,1)").dc(0, 0, 24).ss(8).s("#fff").f("rgba(0,0,0,0)").mt(0, 24).lt(0, -24);
    } else if (sky_state == 9) {
        obj.graphics.ss(4).s("#000").f("rgba(0,0,0,0)").mt(25 * Math.cos(0.785398), 25 * Math.sin(0.785398)).lt(-25 * Math.cos(0.785398), -25 * Math.sin(0.785398)).mt(-25 * Math.cos(0.785398), 25 * Math.sin(0.785398)).lt(25 * Math.cos(0.785398), -25 * Math.sin(0.785398));
    } else if (sky_state == 0) {
        // do nothing
    } else {
        obj.graphics.ss(0).s("#000").f("rgba(0,0,0,1)").mt(0, 0).lt(0, -25).a(0, 0, 25, -1 * Math.PI / 2, Math.PI / 2 * (Math.floor(sky_state / 2) - 1));
        if (sky_state == 3) {
            obj.graphics.ss(3).s("#000").f("rgba(0,0,0,0)").mt(1, 0).lt(1, 25);
        } else if (sky_state == 5) {
            obj.graphics.ss(3).s("#000").f("rgba(0,0,0,0)").mt(0, 0).lt(-25, 0);
        }
    }
}

function draw_T_Td(obj1, obj2) {
    var my_temp = parseInt(document.getElementById("temperature").value);
    var my_dewpt = parseInt(document.getElementById("dewpoint").value);
    document.getElementById("message").innerHTML = "";

    if (my_temp > 120 || my_temp < -80) {
        my_temp = my_temp > 0 ? 120 : -80;
        document.getElementById("message").innerHTML = "Error: Temperature out of range (temperature was reset to " + my_temp + " F).";
        document.getElementById("temperature").value = my_temp;
    }

    if (my_dewpt > 120 || my_dewpt < -80) {
        my_dewpt = my_dewpt > 0 ? 120 : -80;
        document.getElementById("message").innerHTML = "Error: Dew point temperature out of range (dew point temperature was reset to " + my_dewpt + " F).";
        document.getElementById("dewpoint").value = my_dewpt;
    }

    obj1.text = my_temp;
    obj2.text = my_dewpt;

}

function draw_dp(obj, trend) {
    var dp = document.getElementById("pres_3hr").value;
    if (dp == "") {
        obj.text = "";
        trend.sourceRect = new createjs.Rectangle(0, 0, 20, 20);
        document.getElementById("prestrend").innerHTML = "";
        var option = document.createElement("option");
        option.text = "(none)";
        document.getElementById("prestrend").options.add(option);
    } else if (Math.abs(dp) > 9.9) {
        obj.text = "???";
        trend.sourceRect = new createjs.Rectangle(0, 0, 20, 20);
        document.getElementById("prestrend").innerHTML = "";
        var option = document.createElement("option");
        option.text = "Error (out of range)";
        document.getElementById("prestrend").options.add(option);
        document.getElementById("message").innerHTML = "Error: Pressure change out of range (must be between -9.9 an 9.9 mb/3hr)";
    } else {
        document.getElementById("prestrend").innerHTML = "";
        if (dp > 0) {
            obj.text = "+" + Math.round(dp * 10);

            var option = document.createElement("option");
            option.text = "rising";
            document.getElementById("prestrend").options.add(option);
            option = document.createElement("option");
            option.text = "rising, then steady";
            document.getElementById("prestrend").options.add(option);
            option = document.createElement("option");
            option.text = "steady, then rising";
            document.getElementById("prestrend").options.add(option);

            trend.sourceRect = new createjs.Rectangle(40, 0, 20, 20);

        } else if (dp < 0) {
            obj.text = Math.round(dp * 10);
            var option = document.createElement("option");
            option.text = "falling";
            document.getElementById("prestrend").options.add(option);
            option = document.createElement("option");
            option.text = "falling, then steady";
            document.getElementById("prestrend").options.add(option);
            option = document.createElement("option");
            option.text = "steady, then falling";
            document.getElementById("prestrend").options.add(option);

            trend.sourceRect = new createjs.Rectangle(100, 0, 20, 20);

        } else {
            obj.text = "0";
            var option = document.createElement("option");
            option.text = "steady";
            document.getElementById("prestrend").options.add(option);
            trend.sourceRect = new createjs.Rectangle(20, 0, 20, 20);
        }

    }
}

function draw_P(obj) {
    var P_uncoded = document.getElementById("pressure").value;
    document.getElementById("message").innerHTML = "";
    if (P_uncoded != "") {
        if (P_uncoded <= 1050 && P_uncoded >= 901) {
            if (P_uncoded >= 1000) {
                P_coded = Math.round((P_uncoded - 1000) * 10);
                while (P_coded.toString().length < 3) {
                    P_coded = "0" + P_coded.toString();
                }
                obj.text = P_coded;
            } else {
                obj.text = Math.round((P_uncoded - 900) * 10);
            }
        } else {
            obj.text = "???";
            document.getElementById("message").innerHTML = "Error: Pressure out of range (enter a pressure between 1049-901 mb)";
        }

    } else {
        obj.text = "";
    }
}

function draw_vis(obj, fract_state) {

    obj.getChildByName("vis_whole").text = document.getElementById("visibility").value;
    document.getElementById("message").innerHTML = "";

    if (fract_state > 0) {
        obj.getChildByName("vis_num").text = "1";
        obj.getChildByName("vis_denom").text = Math.pow(2, fract_state);
        obj.getChildByName("vis_line").graphics.ss(2).s("#000").mt(5, 9).lt(25, 9);
        obj.getChildByName("vis_whole").x = 0;
        if (document.getElementById("visibility").value == "0") {
            obj.getChildByName("vis_whole").text = "";
        }
    } else {
        obj.getChildByName("vis_num").text = "";
        obj.getChildByName("vis_denom").text = "";
        obj.getChildByName("vis_line").graphics.ss(0).s("#fff").mt(5, 9).lt(25, 9);
        obj.getChildByName("vis_whole").x = 20;
    }

    var option;
    var selected_wx = document.getElementById("weather").selectedIndex;
    document.getElementById("weather").remove(21);
    document.getElementById("weather").remove(20);
    document.getElementById("weather").remove(19);
    document.getElementById("weather").remove(18);
    document.getElementById("weather").remove(17);

    if (document.getElementById("visibility").value < 7) {
        
        document.getElementById("weather").options[0].text="(Obstruction Required: Vis < 7mi)";
        
        option = document.createElement("option");
        option.text = "Blowing Snow";
        document.getElementById("weather").add(option);
        option = document.createElement("option");
        option.text = "Blowing Dust";
        document.getElementById("weather").add(option);
        option = document.createElement("option");
        option.text = "Smoke";
        document.getElementById("weather").add(option);
        option = document.createElement("option");
        option.text = "Haze";
        document.getElementById("weather").add(option);
        option = document.createElement("option");
        option.text = "Fog";
        document.getElementById("weather").add(option);
        document.getElementById("weather").selectedIndex = selected_wx;
        if (selected_wx == 0) {
            document.getElementById("message").innerHTML = "An obstruction to visibility must be selected because visibility is less than 7 miles.";
        }

    } else {
           
        document.getElementById("weather").options[0].text="(none)";
        
        if (selected_wx >= 17 || selected_wx == 0) {
            document.getElementById("weather").selectedIndex = 0
        }
        draw_weather(weather, document.getElementById("weather").selectedIndex);
    }

}

function draw_wind(obj) {
    var wind_speed = parseInt(document.getElementById("w_speed").value);
    var wind_direction = parseInt(document.getElementById("w_dir").value);
    var flag_width = 20;
    var flag_length = 50;
    var flag_separation = 10;

    document.getElementById("message").innerHTML = "";

    if (wind_speed == "") {
        wind_speed = 0;
    }

    if (wind_direction > 359) {
        wind_direction -= 360;
        document.getElementById("message").innerHTML = "Error: Wind direction out of range (direction was reset to between 0 and 359 degrees).";
        document.getElementById("w_dir").value = wind_direction;
    }

    if (wind_speed > 200) {
        wind_speed = 200;
        document.getElementById("message").innerHTML = "Error: Wind speed out of range (reset to 200 knots).";
        document.getElementById("w_speed").value = 200;
    }

    obj.graphics.clear();
    if (wind_speed <= 2) {
        obj.graphics.ss(2).s("#000").f("rgba(0,0,0,0)").dc(0, 0, 33);
    } else {
        obj.graphics.ss(3).s("#000").f("rgba(0,0,0,0)").mt(0, 0).lt(0, -150);
        // round up/down
        wind_speed += 2;
        marker = -149;

        while (wind_speed >= 50) {
            obj.graphics.ss(1).s("#000").f("rgba(0,0,0,1)").mt(0, marker).lt(flag_length, marker + flag_width / 2).lt(0, marker + flag_width);
            marker += flag_width + 5;
            wind_speed -= 50;
        }

        while (wind_speed >= 10) {
            obj.graphics.ss(2).s("#000").f("rgba(0,0,0,0)").mt(0, marker).lt(flag_length, marker);
            marker += flag_separation;
            wind_speed -= 10;
        }

        if (wind_speed >= 5) {
            if (marker == -149) {
                obj.graphics.ss(2).s("#000").f("rgba(0,0,0,0)").mt(0, marker + flag_length / 2.121).lt(flag_length / 2.121, marker);
            } else {
                obj.graphics.ss(2).s("#000").f("rgba(0,0,0,0)").mt(0, marker).lt(flag_length / 2, marker);
            }
        }
        obj.rotation = wind_direction;
    }

}

