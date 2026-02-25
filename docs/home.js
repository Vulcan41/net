// home.js
import { supabase } from "./supabase.js";

const welcome = document.getElementById("welcome");

const { data: { session } } = await supabase.auth.getSession();

// Protect page
if (!session) {
    window.location.href = "auth.html";
} else {
    welcome.innerText = "Welcome " + session.user.email;
}

window.logout = async function () {
    await supabase.auth.signOut();
    window.location.href = "auth.html";
};