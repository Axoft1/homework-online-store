import React, { FC, useContext } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { AContext, CustomContext } from "../../util/context";
import { categories } from "../categoriesButtons/index";
import { ICatalog } from "../../models/ICatalog";
import * as img from "../../img/imges";
import Select from "react-select";
import { IDataForm, convertIntoObj } from ".";
import "./style.scss";

interface BasketEmptyProps {
  show?: boolean;
  setShow(arg: boolean): void;
}

const AdminPanel: FC<BasketEmptyProps> = ({ show, setShow }) => {
  const { addCatalogAdmin, catalogAdmin, deletCatalogAdmin, setAdminPanel } =
    useContext<AContext>(CustomContext);

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IDataForm>({ mode: "onChange" });

  const onSubmit: SubmitHandler<IDataForm> = (data): void => {
    
    const newCatalog: ICatalog = convertIntoObj(data);
    addCatalogAdmin && addCatalogAdmin(newCatalog);
  };

  const set = (): void => {
    setShow(false);
    if (localStorage.getItem("catalogAdmin")?.length! > 3) {
      setAdminPanel!(true);
    } else {
      setAdminPanel!(false);
    }
  };

  return (
    <div
      data-testid="admin-panel"
      style={{ display: show ? "flex" : "none" }}
      className="adminPanel"
    >
      <div className="adminPanel__block">
        <h3 className="basketEmpty__title">Админка</h3>
        <div onClick={(): void => set()} className="basketEmpty__close">
          <img src={img.closeOutlineIcon} alt="X" />
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="formAdminPanel"
        >
          {errors.url && <span>Заполните правильно url товара</span>}
          {errors.name && <span>Напишите имя товара</span>}
          {errors.barcode && <span>Только цифры</span>}
          <div className="formAdminPanel__inputs">
            <p>Название</p>
            <input
              required
              defaultValue="Крем интенсивный для чувствительной кожи"
              placeholder="Название товара"
              {...register("name", {})}
            />
          </div>
          <Controller
            control={control}
            name="type_of_care"
            defaultValue={categories[0].value}
            rules={{ required: "Обязательное поле" }}
            render={({
              field: { onChange, value, ref },
              fieldState: { error },
            }) => (
              <div className="formAdminPanel__inputs">
                <p>Тип ухода</p>
                <Select
                  defaultValue={categories[0]}
                  ref={ref}
                  className="react-select"
                  onChange={(val): void => onChange(val.map((c): string[] => c.value))}
                  isSearchable={false}
                  value={categories.find((c): boolean => c.value === value)}
                  isMulti
                  options={categories}
                />
              </div>
            )}
          />
          <div className="formAdminPanel__inputs">
            <p>Url</p>
            <input
              required
              placeholder="Ссылка на картинку: url"
              defaultValue="https://avatars.mds.yandex.net/get-mpic/6321906/img_id6858736390206039207.jpeg/orig"
              {...register("url", { pattern: /^(https?:\/\/)/ })}
            />
          </div>
          <div className="formAdminPanel__inputs">
            <p>Объем</p>
            <input
              required
              defaultValue="100 мл"
              placeholder="Объем: 100 мл"
              {...register("size_type", {})}
            />
          </div>
          <div className="formAdminPanel__inputs">
            <p>Габариты</p>
            <input
              required
              defaultValue="12см/12cм"
              placeholder="Габариты: 12см/12cм"
              {...register("size", {})}
            />
          </div>
          <div className="formAdminPanel__inputs">
            <p>Штрихкод</p>
            <input
              required
              type="number"
              defaultValue="100023239417"
              placeholder="Штрихкод: 100013239417"
              {...register("barcode", { pattern: /^[0-9]+$/ })}
            />
          </div>
          <div className="formAdminPanel__inputs">
            <p>Производитель</p>
            <input
              required
              defaultValue="ARAVIA"
              placeholder="Производитель: AVARIA"
              {...register("manufacturer", {})}
            />
          </div>
          <div className="formAdminPanel__inputs">
            <p>Брэнд</p>
            <input
              required
              defaultValue="ARAVIA"
              placeholder="Брэнд: AVARIA"
              {...register("brand", {})}
            />
          </div>
          <div className="formAdminPanel__inputs">
            <p>Описание</p>
            <input
              required
              type="textarea"
              defaultValue="Лёгкий, быстро впитывающийся крем с мочевиной (urea 10). Предназначен для сухой кожи, склонной к появлению шелушений. Мочевина – мощный природный увлажнитель и кератолитик, который входит в состав натурального увлажняющего фактора кожи. Благодаря своим физическим свойствам, аккумулирует влагу в верхних слоях эпидермиса, снимает ощущение стянутости, устраняет гиперкератоз. Обеспечивает коже здоровый вид, гладкость и эластичность. Крем мгновенно увлажняет кожу, повышает её барьерные свойства, способствует снижению трансэпидермальной потери влаги. Рекомендуется при водном дисбалансе, сильном шелушении, вредном воздействии окружающей среды."
              placeholder="Описание"
              {...register("description", {})}
            />
          </div>
          <div className="formAdminPanel__inputs">
            <p>Цена</p>
            <input
              required
              type="number"
              defaultValue="1223"
              placeholder="Цена"
              {...register("price", { pattern: /^[0-9]+$/ })}
            />
          </div>

          <input type="submit" data-testid="submit-admin-panel" />
        </form>
        <ul className="adminPanel__ul">
          {catalogAdmin
            ? catalogAdmin.map((e) => (
                <li key={e.id} data-testid="added-product">
                  {e.name}
                  <button onClick={(): void => deletCatalogAdmin!(e.id)}>
                    Удалить
                  </button>
                </li>
              ))
            : ""}
        </ul>
      </div>
    </div>
  );
};

export default AdminPanel;
