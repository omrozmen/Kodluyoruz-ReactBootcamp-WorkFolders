import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ToastLoading from "./components/toast-loading";
import HomePage from "./pages/home";
import CartPage from "./pages/cart";
import NotFound from "./pages/not-found";
import SurveyAnswerPage from "./pages/survey-answer";
import CategoryListPage from "./pages/category-list";
import ProductDetailPage from "./pages/product-detail";

import { ThemeProvider } from "./context/theme-context";
import Product from "./pages/product";
import About from "./pages/about";
import HomePages from "./pages/homepage";
import NotFounds from "./pages/not-found";
import Contact from "./pages/contact";
import Navbar from "./components/navbar";

export default function App() {
	return (
		<React.Fragment>
			<BrowserRouter>
				<ThemeProvider>
					<Navbar />
					<div className="container">
						<Routes>
							<Route element={<HomePage />} path="/" />
							<Route element={<CartPage />} path="/sepet" />
							<Route element={<SurveyAnswerPage />} path="/anket" />
							<Route element={<CategoryListPage />} path="/kategoriler/:id" />
							<Route element={<ProductDetailPage />} path="/urunler/:id" />
							<Route element={<NotFound />} path="*" />
							<Route path="/home" element={<HomePages />} />
							<Route path="/product" element={<Product />} />
							<Route path="/about" element={<About />} />
							<Route path="/contact" element={<Contact />} />
							<Route path="/" element={<NotFounds />} />
						</Routes>
					</div>
				</ThemeProvider>
			</BrowserRouter>

			<ToastLoading />
		</React.Fragment>
	);
}
