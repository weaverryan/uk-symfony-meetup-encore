<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class MainController extends AbstractController
{
    /**
     * @Route("/")
     */
    public function homepage()
    {
        return $this->render('main/homepage.html.twig');
    }

    /**
     * @Route("/store", name="app_store")
     */
    public function store()
    {
        return $this->render('main/store.html.twig');
    }

    /**
     * @Route("/api/products")
     */
    public function productsApi()
    {
        return $this->json(['products' => [
            'Sheer Shears',
            'Wool Hauling Basket',
            'After-Shear (Fresh Cut Grass)',
            'After-Shear (Morning Dew)',
            'Shear Comb',
            'Shearly Conditioned'
        ]]);
    }
}
