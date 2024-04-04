import { useEffect } from "react";
import $ from 'jquery';

export const useSearchToggle = () => {
    useEffect(() => {
        // Search Toggle
        $("#search_input_box").hide();
        $("#search").on("click", function () {
            $("#search_input_box").slideToggle();
            // $("#search_input").focus();
        });
        $("#close_search").on("click", function () {
            $('#search_input_box').slideUp(500);
        });
    }, []);
}
