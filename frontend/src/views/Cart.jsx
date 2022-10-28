const Cart = () => {
  return (
    <>
    <div className="container py-5">
        <div className="py-2"></div>
        <main classNameName="py-5">
            <div className="py-5 text-center">
                <img className="d-block mx-auto mb-4" src="/assets/cart.jpg" alt="" width="200" height="150" />
                <h2>Formulario de Pago</h2>
                <p className="lead">A continuación se muestra un formulario de ejemplo construido completamente con los controles de formulario de Bootstrap. Cada grupo de formulario requerido tiene un estado de validación que se puede activar al intentar enviar el formulario sin completarlo.</p>
            </div>

            <div className="row g-5">
                <div className="col-md-5 col-lg-4 order-md-last">
                    <h4 className="d-flex justify-content-between align-items-center mb-3">
                    <span className="text-primary">Tu Carrito</span>
                    <span className="badge bg-primary rounded-pill">3</span>
                    </h4>
                    <ul className="list-group mb-3">
                        <li className="list-group-item d-flex justify-content-between lh-sm">
                            <div>
                            <h6 className="my-0">Primer Prducto</h6>
                            <small className="text-muted">Descripción</small>
                            </div>
                            <span className="text-muted">$12</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between lh-sm">
                            <div>
                            <h6 className="my-0">Segundo producto</h6>
                            <small className="text-muted">Descripción</small>
                            </div>
                            <span className="text-muted">$8</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between lh-sm">
                            <div>
                            <h6 className="my-0">Tercer Producto</h6>
                            <small className="text-muted">Descripción</small>
                            </div>
                            <span className="text-muted">$5</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between bg-light">
                            <div className="text-success">
                            <h6 className="my-0">Código Promocional</h6>
                            <small>102383</small>
                            </div>
                            <span className="text-success">−$5</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between">
                            <span>Total:</span>
                            <strong>$20</strong>
                        </li>
                    </ul>

                    <form className="card p-2">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Promo code"/>
                            <button type="submit" className="btn btn-secondary">Redimir</button>
                        </div>
                    </form>
                </div>

                <div className="col-md-7 col-lg-8">
                    <h4 className="mb-3">Dirección de Envío</h4>
                     <form className="needs-validation" novalidate>
                        <div className="row g-3">
                            <div className="col-sm-6">
                                <label for="firstName" className="form-label">Nombres</label>
                                <input type="text" className="form-control" id="firstName" placeholder="" value="" required/>
                                <div className="invalid-feedback">
                                    Valid first name is required.
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <label for="lastName" className="form-label">Apellidos</label>
                                <input type="text" className="form-control" id="lastName" placeholder="" value="" required/>
                                <div className="invalid-feedback">
                                    Valid last name is required.
                                </div>
                            </div>

                            <div className="col-12">
                                <label for="username" className="form-label">Nombre de Usuario</label>
                                <div className="input-group has-validation">
                                    <span className="input-group-text">@</span>
                                    <input type="text" className="form-control" id="username" placeholder="Username" required/>
                                    <div className="invalid-feedback">
                                        Your username is required.
                                    </div>
                                </div>
                            </div>

                            <div className="col-12">
                                <label for="email" className="form-label">Correo Electrónico <span className="text-muted">(Opcional)</span></label>
                                <input type="email" className="form-control" id="email" placeholder="you@example.com"/>
                                <div className="invalid-feedback">
                                    Please enter a valid email address for shipping updates.
                                </div>
                            </div>

                            <div className="col-12">
                                <label for="address" className="form-label">Dirección</label>
                                <input type="text" className="form-control" id="address" placeholder="1234 Main St" required/>
                                <div className="invalid-feedback">
                                    Please enter your shipping address.
                                </div>
                            </div>

                            <div className="col-12">
                                <label for="address2" className="form-label">Dirección 2 <span className="text-muted">(Opcional)</span></label>
                                <input type="text" className="form-control" id="address2" placeholder="Apartment or suite"/>
                            </div>

                            <div className="col-md-5">
                                <label for="country" className="form-label">Cíudad</label>
                                <select className="form-select" id="country" required>
                                    <option value="">Choose...</option>
                                    <option>Medellín</option>
                                    <option>Cali</option>
                                    <option>Bogotá</option>
                                </select>
                                <div className="invalid-feedback">
                                    Please select a valid country.
                                </div>
                            </div>
                        </div>

                        <hr className="my-4"/>

                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="same-address"/>
                            <label className="form-check-label" for="same-address">La dirección de envío es la misma que mi dirección de facturación address</label>
                        </div>

                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="save-info"/>
                            <label className="form-check-label" for="save-info">Guarda esta información para la próxima vez</label>
                        </div>

                        <hr className="my-4"/>

                        <h4 className="mb-3">Payment</h4>

                        <div className="my-3">
                            <div className="form-check">
                                <input id="credit" name="paymentMethod" type="radio" className="form-check-input" checked required/>
                                <label className="form-check-label" for="credit">Tarjeta de crédito</label>
                            </div>
                            <div className="form-check">
                                <input id="debit" name="paymentMethod" type="radio" className="form-check-input" required/>
                                <label className="form-check-label" for="debit">Tarjeta de débito</label>
                            </div>
                            <div className="form-check">
                                <input id="paypal" name="paymentMethod" type="radio" className="form-check-input" required/>
                                <label className="form-check-label" for="paypal">PayPal</label>
                            </div>
                        </div>

                        <div className="row gy-3">
                            <div className="col-md-6">
                                <label for="cc-name" className="form-label">Nombre en la tarjeta</label>
                                <input type="text" className="form-control" id="cc-name" placeholder="" required/>
                                <small className="text-muted">Nombre completo como se muestra en la tarjeta</small>
                                <div className="invalid-feedback">
                                    Name on card is required
                                </div>
                            </div>

                            <div className="col-md-6">
                                <label for="cc-number" className="form-label">Número de Tarjeta de Crédito</label>
                                <input type="text" className="form-control" id="cc-number" placeholder="" required/>
                                <div className="invalid-feedback">
                                    Credit card number is required
                                </div>
                            </div>

                            <div className="col-md-3">
                                <label for="cc-expiration" className="form-label">Vencimiento</label>
                                <input type="text" className="form-control" id="cc-expiration" placeholder="" required/>
                                <div className="invalid-feedback">
                                    Expiration date required
                                </div>
                            </div>

                            <div className="col-md-3">
                                <label for="cc-cvv" className="form-label">CVV</label>
                                <input type="text" className="form-control" id="cc-cvv" placeholder="" required/>
                                <div className="invalid-feedback">
                                    Security code required
                                </div>
                            </div>
                        </div>

                        <hr className="my-4"/>

                        <button className="w-100 btn btn-primary btn-lg" type="submit">Continuar con la aprobación</button>
                    </form>
                </div>
            </div>
        </main>
    </div>
    </>
  )
}

export default Cart