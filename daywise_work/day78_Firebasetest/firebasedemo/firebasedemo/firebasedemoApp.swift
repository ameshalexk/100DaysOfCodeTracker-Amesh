//
//  firebasedemoApp.swift
//  firebasedemo
//
//  Created by Amesh Alex Kuruvilla on 6/2/21.
//

import SwiftUI
import Firebase

@main
struct firebasedemoApp: App {
    
    init() {
        FirebaseApp.configure()
    }
    
    var body: some Scene {
        
        WindowGroup {
            ContentView()
            
        }
    }
}
